/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4836Component } from './comp-4836.component';

describe('Comp4836Component', () => {
  let component: Comp4836Component;
  let fixture: ComponentFixture<Comp4836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
