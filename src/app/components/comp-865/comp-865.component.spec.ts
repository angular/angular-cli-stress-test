/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp865Component } from './comp-865.component';

describe('Comp865Component', () => {
  let component: Comp865Component;
  let fixture: ComponentFixture<Comp865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
