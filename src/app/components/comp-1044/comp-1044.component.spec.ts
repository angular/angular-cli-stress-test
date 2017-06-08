/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1044Component } from './comp-1044.component';

describe('Comp1044Component', () => {
  let component: Comp1044Component;
  let fixture: ComponentFixture<Comp1044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
