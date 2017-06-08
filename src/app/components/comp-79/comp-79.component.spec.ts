/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp79Component } from './comp-79.component';

describe('Comp79Component', () => {
  let component: Comp79Component;
  let fixture: ComponentFixture<Comp79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
