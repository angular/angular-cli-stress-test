/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp608Component } from './comp-608.component';

describe('Comp608Component', () => {
  let component: Comp608Component;
  let fixture: ComponentFixture<Comp608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
