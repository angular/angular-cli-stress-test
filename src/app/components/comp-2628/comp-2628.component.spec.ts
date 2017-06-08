/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2628Component } from './comp-2628.component';

describe('Comp2628Component', () => {
  let component: Comp2628Component;
  let fixture: ComponentFixture<Comp2628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
