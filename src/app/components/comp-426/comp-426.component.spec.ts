/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp426Component } from './comp-426.component';

describe('Comp426Component', () => {
  let component: Comp426Component;
  let fixture: ComponentFixture<Comp426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
