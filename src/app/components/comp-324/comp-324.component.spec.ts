/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp324Component } from './comp-324.component';

describe('Comp324Component', () => {
  let component: Comp324Component;
  let fixture: ComponentFixture<Comp324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
