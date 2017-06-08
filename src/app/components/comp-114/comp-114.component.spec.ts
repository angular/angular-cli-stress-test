/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp114Component } from './comp-114.component';

describe('Comp114Component', () => {
  let component: Comp114Component;
  let fixture: ComponentFixture<Comp114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
