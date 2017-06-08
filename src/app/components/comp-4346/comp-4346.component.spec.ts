/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4346Component } from './comp-4346.component';

describe('Comp4346Component', () => {
  let component: Comp4346Component;
  let fixture: ComponentFixture<Comp4346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
