/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp102Component } from './comp-102.component';

describe('Comp102Component', () => {
  let component: Comp102Component;
  let fixture: ComponentFixture<Comp102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
