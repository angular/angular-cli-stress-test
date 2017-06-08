/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3769Component } from './comp-3769.component';

describe('Comp3769Component', () => {
  let component: Comp3769Component;
  let fixture: ComponentFixture<Comp3769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
