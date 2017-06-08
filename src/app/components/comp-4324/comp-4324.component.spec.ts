/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4324Component } from './comp-4324.component';

describe('Comp4324Component', () => {
  let component: Comp4324Component;
  let fixture: ComponentFixture<Comp4324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
