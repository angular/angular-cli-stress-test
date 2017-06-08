/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3896Component } from './comp-3896.component';

describe('Comp3896Component', () => {
  let component: Comp3896Component;
  let fixture: ComponentFixture<Comp3896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
