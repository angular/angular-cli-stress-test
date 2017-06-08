/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2173Component } from './comp-2173.component';

describe('Comp2173Component', () => {
  let component: Comp2173Component;
  let fixture: ComponentFixture<Comp2173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
