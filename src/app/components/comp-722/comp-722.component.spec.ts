/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp722Component } from './comp-722.component';

describe('Comp722Component', () => {
  let component: Comp722Component;
  let fixture: ComponentFixture<Comp722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
