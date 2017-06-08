/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2217Component } from './comp-2217.component';

describe('Comp2217Component', () => {
  let component: Comp2217Component;
  let fixture: ComponentFixture<Comp2217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
