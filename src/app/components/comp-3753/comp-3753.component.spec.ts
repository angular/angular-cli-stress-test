/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3753Component } from './comp-3753.component';

describe('Comp3753Component', () => {
  let component: Comp3753Component;
  let fixture: ComponentFixture<Comp3753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
