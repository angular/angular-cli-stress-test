/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4624Component } from './comp-4624.component';

describe('Comp4624Component', () => {
  let component: Comp4624Component;
  let fixture: ComponentFixture<Comp4624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
