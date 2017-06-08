/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2836Component } from './comp-2836.component';

describe('Comp2836Component', () => {
  let component: Comp2836Component;
  let fixture: ComponentFixture<Comp2836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
