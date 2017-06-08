/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp500Component } from './comp-500.component';

describe('Comp500Component', () => {
  let component: Comp500Component;
  let fixture: ComponentFixture<Comp500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
