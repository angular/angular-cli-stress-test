/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service450Service } from './service-450.service';

describe('Service450Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service450Service]
    });
  });

  it('should ...', inject([Service450Service], (service: Service450Service) => {
    expect(service).toBeTruthy();
  }));
});
