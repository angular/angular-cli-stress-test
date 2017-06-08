/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp607Component } from './comp-607.component';

describe('Comp607Component', () => {
  let component: Comp607Component;
  let fixture: ComponentFixture<Comp607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
