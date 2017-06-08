/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp804Component } from './comp-804.component';

describe('Comp804Component', () => {
  let component: Comp804Component;
  let fixture: ComponentFixture<Comp804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
