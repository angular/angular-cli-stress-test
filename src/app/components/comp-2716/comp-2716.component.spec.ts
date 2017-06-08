/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2716Component } from './comp-2716.component';

describe('Comp2716Component', () => {
  let component: Comp2716Component;
  let fixture: ComponentFixture<Comp2716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
