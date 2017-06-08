/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2034Component } from './comp-2034.component';

describe('Comp2034Component', () => {
  let component: Comp2034Component;
  let fixture: ComponentFixture<Comp2034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
