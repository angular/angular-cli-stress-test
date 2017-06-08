/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service758Service } from './service-758.service';

describe('Service758Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service758Service]
    });
  });

  it('should ...', inject([Service758Service], (service: Service758Service) => {
    expect(service).toBeTruthy();
  }));
});
