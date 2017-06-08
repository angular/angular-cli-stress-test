/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp744Component } from './comp-744.component';

describe('Comp744Component', () => {
  let component: Comp744Component;
  let fixture: ComponentFixture<Comp744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
