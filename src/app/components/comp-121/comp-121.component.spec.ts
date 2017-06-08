/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp121Component } from './comp-121.component';

describe('Comp121Component', () => {
  let component: Comp121Component;
  let fixture: ComponentFixture<Comp121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
