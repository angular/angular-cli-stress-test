/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1108Component } from './comp-1108.component';

describe('Comp1108Component', () => {
  let component: Comp1108Component;
  let fixture: ComponentFixture<Comp1108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
