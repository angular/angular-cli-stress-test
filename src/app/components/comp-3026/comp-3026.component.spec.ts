/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3026Component } from './comp-3026.component';

describe('Comp3026Component', () => {
  let component: Comp3026Component;
  let fixture: ComponentFixture<Comp3026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
