/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2171Component } from './comp-2171.component';

describe('Comp2171Component', () => {
  let component: Comp2171Component;
  let fixture: ComponentFixture<Comp2171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
