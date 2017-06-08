/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp866Component } from './comp-866.component';

describe('Comp866Component', () => {
  let component: Comp866Component;
  let fixture: ComponentFixture<Comp866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
