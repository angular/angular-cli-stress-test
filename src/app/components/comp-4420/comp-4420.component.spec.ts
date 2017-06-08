/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4420Component } from './comp-4420.component';

describe('Comp4420Component', () => {
  let component: Comp4420Component;
  let fixture: ComponentFixture<Comp4420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
