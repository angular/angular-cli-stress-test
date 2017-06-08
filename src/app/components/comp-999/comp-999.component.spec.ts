/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp999Component } from './comp-999.component';

describe('Comp999Component', () => {
  let component: Comp999Component;
  let fixture: ComponentFixture<Comp999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
