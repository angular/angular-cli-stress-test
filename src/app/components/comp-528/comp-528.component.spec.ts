/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp528Component } from './comp-528.component';

describe('Comp528Component', () => {
  let component: Comp528Component;
  let fixture: ComponentFixture<Comp528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
