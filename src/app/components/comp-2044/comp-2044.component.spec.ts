/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2044Component } from './comp-2044.component';

describe('Comp2044Component', () => {
  let component: Comp2044Component;
  let fixture: ComponentFixture<Comp2044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
