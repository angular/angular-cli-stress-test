/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp40Component } from './comp-40.component';

describe('Comp40Component', () => {
  let component: Comp40Component;
  let fixture: ComponentFixture<Comp40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
