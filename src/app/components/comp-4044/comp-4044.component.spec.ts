/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4044Component } from './comp-4044.component';

describe('Comp4044Component', () => {
  let component: Comp4044Component;
  let fixture: ComponentFixture<Comp4044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
