/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp473Component } from './comp-473.component';

describe('Comp473Component', () => {
  let component: Comp473Component;
  let fixture: ComponentFixture<Comp473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
