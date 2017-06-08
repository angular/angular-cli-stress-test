/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service121Service } from './service-121.service';

describe('Service121Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service121Service]
    });
  });

  it('should ...', inject([Service121Service], (service: Service121Service) => {
    expect(service).toBeTruthy();
  }));
});
