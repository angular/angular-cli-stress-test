/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4008Component } from './comp-4008.component';

describe('Comp4008Component', () => {
  let component: Comp4008Component;
  let fixture: ComponentFixture<Comp4008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
