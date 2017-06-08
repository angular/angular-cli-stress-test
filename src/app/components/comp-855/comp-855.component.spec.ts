/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp855Component } from './comp-855.component';

describe('Comp855Component', () => {
  let component: Comp855Component;
  let fixture: ComponentFixture<Comp855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
