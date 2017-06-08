/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4684Component } from './comp-4684.component';

describe('Comp4684Component', () => {
  let component: Comp4684Component;
  let fixture: ComponentFixture<Comp4684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
