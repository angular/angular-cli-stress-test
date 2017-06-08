/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp621Component } from './comp-621.component';

describe('Comp621Component', () => {
  let component: Comp621Component;
  let fixture: ComponentFixture<Comp621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
