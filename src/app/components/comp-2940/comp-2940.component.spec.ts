/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2940Component } from './comp-2940.component';

describe('Comp2940Component', () => {
  let component: Comp2940Component;
  let fixture: ComponentFixture<Comp2940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
