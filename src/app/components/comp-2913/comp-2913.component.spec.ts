/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2913Component } from './comp-2913.component';

describe('Comp2913Component', () => {
  let component: Comp2913Component;
  let fixture: ComponentFixture<Comp2913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
