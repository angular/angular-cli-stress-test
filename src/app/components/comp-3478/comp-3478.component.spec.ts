/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3478Component } from './comp-3478.component';

describe('Comp3478Component', () => {
  let component: Comp3478Component;
  let fixture: ComponentFixture<Comp3478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
