/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp737Component } from './comp-737.component';

describe('Comp737Component', () => {
  let component: Comp737Component;
  let fixture: ComponentFixture<Comp737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
