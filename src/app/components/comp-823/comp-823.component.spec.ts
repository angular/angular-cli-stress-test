/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp823Component } from './comp-823.component';

describe('Comp823Component', () => {
  let component: Comp823Component;
  let fixture: ComponentFixture<Comp823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
