/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp401Component } from './comp-401.component';

describe('Comp401Component', () => {
  let component: Comp401Component;
  let fixture: ComponentFixture<Comp401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
