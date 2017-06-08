/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1654Component } from './comp-1654.component';

describe('Comp1654Component', () => {
  let component: Comp1654Component;
  let fixture: ComponentFixture<Comp1654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
