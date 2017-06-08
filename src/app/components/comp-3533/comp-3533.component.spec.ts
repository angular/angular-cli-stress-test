/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3533Component } from './comp-3533.component';

describe('Comp3533Component', () => {
  let component: Comp3533Component;
  let fixture: ComponentFixture<Comp3533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
