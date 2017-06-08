/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4350Component } from './comp-4350.component';

describe('Comp4350Component', () => {
  let component: Comp4350Component;
  let fixture: ComponentFixture<Comp4350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
